import { useState } from "react";
import { API } from "../server";
import { UsePost } from "../types/hooks/usePost";

export const usePost = ({
  route,
  initial = {},
  initialState = {},
  redirect,
  message,
  setError = (err: any) => {},
}: UsePost) => {
  const [form, setForm] = useState({ ...initialState });
  const [loading, setLoading] = useState({ send: false });

  const send = async (body: any) => {
    try {
      setLoading({ ...loading, send: true });
      const { status, data } = await API.post(route, {
        ...initial,
        ...form,
        ...body,
      });
      if (+status === 200) {
        if (redirect.status && redirect.action) {
          redirect.action(data);
        }
      }
      setForm({});
      setLoading({ ...loading, send: false });
    } catch (error: any) {
      setError(error?.response?.data?.message);
      setLoading({ ...loading, send: false });
    }
  };

  return [form, setForm, send, loading] as const;
};
