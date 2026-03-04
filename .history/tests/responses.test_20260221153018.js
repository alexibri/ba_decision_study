import { describe, it, expect, vi, beforeEach } from "vitest";
import supabase from "../src/lib/db/supabase-client";

const insertMock = vi.fn()
const fromMock = vi.fn(() => ({insert: insertMock}))

vi.mock("../src/lib/db/supabase-client")