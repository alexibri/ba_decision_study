import { describe, it, expect, vi, beforeEach } from "vitest";
import { SupabaseClient } from "@supabase/supabase-js";

const insertMock = vi.fn()
const fromMock = vi.fn(() => ({insert: insertMock}))

vi.mock("../src")