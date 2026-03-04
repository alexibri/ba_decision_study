import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

const navigateMock = vi.fn()
let params = { sid: "1", stepid: "1"}

vi.mock("react-router-dom", async () => )
