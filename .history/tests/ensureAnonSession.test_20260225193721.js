import { describe, it, expect, vi, beforeEach } from "vitest";

const getSessionMock = vi.hoisted(() => vi.fn())
const signInAnomiouslyMock = vi.hoisted(() => vi.fn())

