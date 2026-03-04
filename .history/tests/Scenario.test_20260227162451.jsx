import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { useEffect } from "react";

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

vi.mock("../src/scenarios/Scenario1/S1Dark1", () => ({
    default: () => <div>Mock_Scenario</div>
}))

import Scenario from "../src/pages/Scenario";

beforeEach( () => {
    vi.clearAllMocks()
    localStorage.clear()
    params = {sid: "1", stepid: "1"}
})

describe("Scenario", () => {

    it("renders scenario component if run is active", async () => {
        getGroupMock.mockReturnValue("dark")
        localStorage.setItem("run_id", "2")

        getRunByIdMock.mockResolvedValueOnce({
            run_status: "started",
            run_end_at: null
        })

        render(<Scenario />)

        expect(await screen.findByText("Mock_Scenario")).toBeTruthy()
        expect(navigateMock).not.toHaveBeenCalled()
    })

    it("redirects to /end if run_id is missing", async () => {
        getGroupMock.mockReturnValue("dark")

        render(<Scenario />)

        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledWith("/end", {replace:true})
        })
    })

    it("redirects to /end if run is not active", async () => {
        getGroupMock.mockReturnValue("dark")
        localStorage.setItem("run_id","2")

        getRunByIdMock.mockResolvedValueOnce({
            run_status: "finished",
            run_end_at: "2026-0"
        })
    })
})