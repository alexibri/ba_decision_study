import { describe, it, expect, vi, beforeEach } from "vitest";

const builder = vi.hoisted( () => {
    const build = {
        insert: vi.fn(),
        update
    }
})