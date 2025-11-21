import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createApplication, createContact, createNewsletterSubscriber, getAllApplications, getAllContacts, getAllNewsletterSubscribers, updateApplicationStatus, deleteApplication, updateContactStatus, deleteContact, unsubscribeNewsletter } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Application submissions
  applications: router({
    submit: publicProcedure
      .input(z.object({
        fullName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        country: z.string().min(1),
        city: z.string().min(1),
        track: z.enum(["technical", "business"]),
        careerPath: z.enum(["egypt", "uae", "international", "entrepreneurship"]),
        education: z.string().min(1),
        currentRole: z.string().optional(),
        yearsExperience: z.number().optional(),
        technicalBackground: z.string().optional(),
        motivation: z.string().min(1),
        goals: z.string().min(1),
        linkedinUrl: z.string().optional(),
        portfolioUrl: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createApplication(input);
        
        // Notify owner about new application
        await notifyOwner({
          title: "New Orkestra Ventures Application",
          content: `New application from ${input.fullName} (${input.email}) for ${input.track} track.`,
        });
        
        return { success: true };
      }),
  }),

  // Contact form submissions
  contacts: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        const result = await createContact(input);
        
        // Notify owner about new contact
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `${input.name} (${input.email}) sent a message: ${input.subject}`,
        });
        
        return { success: true };
      }),
  }),

  // Admin queries and mutations
  admin: router({
    getStats: publicProcedure.query(async () => {
      const applications = await getAllApplications();
      const contacts = await getAllContacts();
      const newsletterSubs = await getAllNewsletterSubscribers();
      
      return {
        totalApplications: applications.length,
        totalContacts: contacts.length,
        totalNewsletter: newsletterSubs.length,
        recentApplications: applications.slice(0, 5),
        recentContacts: contacts.slice(0, 5),
      };
    }),
    
    getAllApplications: publicProcedure.query(async () => {
      return await getAllApplications();
    }),
    
    getAllContacts: publicProcedure.query(async () => {
      return await getAllContacts();
    }),
    
    getAllNewsletter: publicProcedure.query(async () => {
      return await getAllNewsletterSubscribers();
    }),
    
    updateApplicationStatus: publicProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "reviewing", "accepted", "rejected"]),
      }))
      .mutation(async ({ input }) => {
        await updateApplicationStatus(input.id, input.status);
        return { success: true };
      }),
    
    deleteApplication: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteApplication(input.id);
        return { success: true };
      }),
    
    updateContactStatus: publicProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "in_progress", "resolved"]),
      }))
      .mutation(async ({ input }) => {
        await updateContactStatus(input.id, input.status);
        return { success: true };
      }),
    
    deleteContact: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteContact(input.id);
        return { success: true };
      }),
    
    unsubscribeNewsletter: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await unsubscribeNewsletter(input.id);
        return { success: true };
      }),
  }),

  // Newsletter subscriptions
  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
        name: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          const result = await createNewsletterSubscriber(input);
          return { success: true };
        } catch (error) {
          if (error instanceof Error && error.message === 'Email already subscribed') {
            return { success: false, error: 'This email is already subscribed to our newsletter.' };
          }
          throw error;
        }
      }),
  }),

  // ============================================
  // ENTERPRISE MODULE ROUTERS
  // ============================================

  // Lead/CRM Management
  leads: router({
    getAll: publicProcedure.query(async () => {
      const { getAllLeads } = await import("./db");
      return await getAllLeads();
    }),
    create: publicProcedure
      .input(z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        source: z.enum(["website", "referral", "event", "social_media", "partner", "other"]).optional(),
        status: z.enum(["new", "contacted", "qualified", "converted", "lost"]).optional(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createLead } = await import("./db");
        return await createLead(input);
      }),
    update: publicProcedure
      .input(z.object({
        id: z.number(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        company: z.string().optional(),
        source: z.enum(["website", "referral", "event", "social_media", "partner", "other"]).optional(),
        status: z.enum(["new", "contacted", "qualified", "converted", "lost"]).optional(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { updateLead } = await import("./db");
        const { id, ...data } = input;
        return await updateLead(id, data);
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteLead } = await import("./db");
        return await deleteLead(input.id);
      }),
  }),

  // Cohort Management
  cohorts: router({
    getAll: publicProcedure.query(async () => {
      const { getAllCohorts } = await import("./db");
      return await getAllCohorts();
    }),
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        code: z.string().min(1),
        startDate: z.string(),
        endDate: z.string(),
        capacity: z.number(),
        enrolled: z.number().optional(),
        status: z.enum(["planning", "recruiting", "active", "completed"]).optional(),
        location: z.string().optional(),
        description: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createCohort } = await import("./db");
        const { startDate, endDate, ...data } = input;
        return await createCohort({
          ...data,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        });
      }),
    update: publicProcedure
      .input(z.object({
        id: z.number(),
        name: z.string().optional(),
        code: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        capacity: z.number().optional(),
        enrolled: z.number().optional(),
        status: z.enum(["planning", "recruiting", "active", "completed"]).optional(),
        location: z.string().optional(),
        description: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { updateCohort } = await import("./db");
        const { id, startDate, endDate, ...data } = input;
        const updateData = {
          ...data,
          ...(startDate ? { startDate: new Date(startDate) } : {}),
          ...(endDate ? { endDate: new Date(endDate) } : {}),
        };
        return await updateCohort(id, updateData);
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteCohort } = await import("./db");
        return await deleteCohort(input.id);
      }),
  }),

  // Mentor Management
  mentors: router({
    getAll: publicProcedure.query(async () => {
      const { getAllMentors } = await import("./db");
      return await getAllMentors();
    }),
    create: publicProcedure
      .input(z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        expertise: z.string().optional(),
        bio: z.string().optional(),
        status: z.enum(["active", "inactive"]).optional(),
        sessionsCompleted: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createMentor } = await import("./db");
        return await createMentor(input);
      }),
    update: publicProcedure
      .input(z.object({
        id: z.number(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        company: z.string().optional(),
        expertise: z.string().optional(),
        bio: z.string().optional(),
        status: z.enum(["active", "inactive"]).optional(),
        sessionsCompleted: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const { updateMentor } = await import("./db");
        const { id, ...data } = input;
        return await updateMentor(id, data);
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteMentor } = await import("./db");
        return await deleteMentor(input.id);
      }),
  }),

  // Budget Management
  budgets: router({
    getAll: publicProcedure.query(async () => {
      const { getAllBudgets } = await import("./db");
      return await getAllBudgets();
    }),
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        category: z.enum(["operations", "marketing", "programs", "hr", "other"]),
        allocated: z.string(),
        spent: z.string().optional(),
        fiscalYear: z.number(),
        status: z.enum(["active", "closed"]).optional(),
      }))
      .mutation(async ({ input }) => {
        const { createBudget } = await import("./db");
        return await createBudget(input);
      }),
    update: publicProcedure
      .input(z.object({
        id: z.number(),
        name: z.string().optional(),
        category: z.enum(["operations", "marketing", "programs", "hr", "other"]).optional(),
        allocated: z.string().optional(),
        spent: z.string().optional(),
        fiscalYear: z.number().optional(),
        status: z.enum(["active", "closed"]).optional(),
      }))
      .mutation(async ({ input }) => {
        const { updateBudget } = await import("./db");
        const { id, ...data } = input;
        return await updateBudget(id, data);
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteBudget } = await import("./db");
        return await deleteBudget(input.id);
      }),
  }),

  // Expense Management
  expenses: router({
    getAll: publicProcedure.query(async () => {
      const { getAllExpenses } = await import("./db");
      return await getAllExpenses();
    }),
    create: publicProcedure
      .input(z.object({
        budgetId: z.number().optional(),
        category: z.string().min(1),
        description: z.string().min(1),
        amount: z.string(),
        expenseDate: z.string(),
        vendor: z.string().optional(),
        status: z.enum(["pending", "approved", "paid"]).optional(),
      }))
      .mutation(async ({ input }) => {
        const { createExpense } = await import("./db");
        const { expenseDate, ...data } = input;
        return await createExpense({
          ...data,
          expenseDate: new Date(expenseDate),
        });
      }),
    update: publicProcedure
      .input(z.object({
        id: z.number(),
        budgetId: z.number().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        amount: z.string().optional(),
        expenseDate: z.string().optional(),
        vendor: z.string().optional(),
        status: z.enum(["pending", "approved", "paid"]).optional(),
      }))
      .mutation(async ({ input }) => {
        const { updateExpense } = await import("./db");
        const { id, expenseDate, ...data } = input;
        const updateData = {
          ...data,
          ...(expenseDate ? { expenseDate: new Date(expenseDate) } : {}),
        };
        return await updateExpense(id, updateData);
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteExpense } = await import("./db");
        return await deleteExpense(input.id);
      }),
  }),

  // Web Content Management
  webPages: router({
    getAll: publicProcedure.query(async () => {
      const { getAllWebPages } = await import("./db");
      return await getAllWebPages();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const { getWebPageBySlug } = await import("./db");
        return await getWebPageBySlug(input.slug);
      }),
    create: publicProcedure
      .input(z.object({
        slug: z.string().min(1),
        title: z.string().min(1),
        content: z.string().min(1),
        status: z.enum(["draft", "published"]).optional(),
        updatedBy: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createWebPage } = await import("./db");
        return await createWebPage(input);
      }),
    update: publicProcedure
      .input(z.object({
        id: z.number(),
        slug: z.string().optional(),
        title: z.string().optional(),
        content: z.string().optional(),
        status: z.enum(["draft", "published"]).optional(),
        updatedBy: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { updateWebPage } = await import("./db");
        const { id, ...data } = input;
        return await updateWebPage(id, data);
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteWebPage } = await import("./db");
        return await deleteWebPage(input.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
