import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { getGroup } from "../src/lib/assignment/group";
import { getRunById } from "../src/lib/db/runs";


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
vi.mock("../src/lib/assignment/group", () => ({
    getGroup: () => getGroupMock(),
}))

const getRunByIdMock = vi.fn()
vi.mock("../src/lib/db/runs", () => ({
    getRunById: (...args) => getRunByIdMock(...args),
}))

vi.mock("../src/lib/scenarios/Scenario1/S1Dark1", () => ({
    
}))