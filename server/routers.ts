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
});

export type AppRouter = typeof appRouter;
