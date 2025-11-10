import { useEffect } from "react";
import { mockWebSocket } from "@/lib/websocketMock";
import { useDispatch } from "react-redux";
import { setTokens } from "../state/tokenSlice";
export function usePriceUpdates() {
  const dispatch = useDispatch();
  useEffect(() => { const s = mockWebSocket((d) => dispatch(setTokens(d))); return () => s.close(); }, [dispatch]);
}