import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, applications, contacts, newsletterSubscribers, InsertApplication, InsertContact, InsertNewsletterSubscriber } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Application form submissions
 */
export async function createApplication(application: InsertApplication) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(applications).values(application);
  return result;
}

export async function getAllApplications() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(applications).orderBy(applications.createdAt);
}

export async function getApplicationById(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(applications).where(eq(applications.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Contact form submissions
 */
export async function createContact(contact: InsertContact) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(contacts).values(contact);
  return result;
}

export async function getAllContacts() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(contacts).orderBy(contacts.createdAt);
}

/**
 * Newsletter subscriptions
 */
export async function createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(newsletterSubscribers).values(subscriber);
    return result;
  } catch (error) {
    // Handle duplicate email error
    if (error instanceof Error && error.message.includes('Duplicate entry')) {
      throw new Error('Email already subscribed');
    }
    throw error;
  }
}

export async function getAllNewsletterSubscribers() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.isActive, 1)).orderBy(newsletterSubscribers.createdAt);
}

/**
 * Update application status
 */
export async function updateApplicationStatus(id: number, status: "pending" | "reviewing" | "accepted" | "rejected") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(applications).set({ status }).where(eq(applications.id, id));
}

/**
 * Delete application
 */
export async function deleteApplication(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.delete(applications).where(eq(applications.id, id));
}

/**
 * Update contact status
 */
export async function updateContactStatus(id: number, status: "new" | "in_progress" | "resolved") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(contacts).set({ status }).where(eq(contacts.id, id));
}

/**
 * Delete contact
 */
export async function deleteContact(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.delete(contacts).where(eq(contacts.id, id));
}

/**
 * Unsubscribe from newsletter
 */
export async function unsubscribeNewsletter(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(newsletterSubscribers).set({ isActive: 0, unsubscribedAt: new Date() }).where(eq(newsletterSubscribers.id, id));
}
