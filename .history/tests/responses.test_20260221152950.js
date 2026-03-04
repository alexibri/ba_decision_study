import { describe, it, expect, vi, beforeEach } from "vitest";
impo

const insertMock = vi.fn()
const fromMock = vi.fn(() => ({insert: insertMock}))

vi.mock("../src")