import { describe, it, expect, vi, beforeEach } from "vitest";
import supa

const insertMock = vi.fn()
const fromMock = vi.fn(() => ({insert: insertMock}))

vi.mock("../src")