import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import getGr

const navigateMock = vi.fn()
let params = { sid: "1", stepid: "1"}

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom")
    return {
        ...actual,
        useNavigate: () => navigateMock,
        useParams: () => params
    }
})

const getGroupMock= vi.fn()
vi.mock("")
