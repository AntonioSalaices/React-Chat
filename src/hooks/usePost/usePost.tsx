import axios from 'axios';
import { useState, useCallback } from 'react';

interface PostQueryResponse<BodyData, ResponseData> {
  post: (data?: BodyData) => Promise<void>;
  loading: boolean;
  error: string | null;
  responseData: ResponseData | null;
}

export const usePostQuery = <BodyData, ResponseData>(
  query: string,
  headers?: unknown
): PostQueryResponse<BodyData, ResponseData> => {
  const [responseData, setResponseData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const post = useCallback(
    async (data?: BodyData) => {
      try {
        setLoading(true);
        const response = await axios.post(query, data);
        setResponseData(response.data);
      } catch (error: any) {
        setError(error.response.data);
      } finally {
        setLoading(false);
      }
    },
    [headers, query]
  );

  return { responseData, loading, error, post };
};
