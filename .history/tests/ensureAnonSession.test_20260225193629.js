import { describe, it, expect, vi, beforeEach } from "vitest";

const authGetUserMock = vi.hoisted(() => vi.fn())
const signInMock = vi.hoisted(() => vi.fn())

