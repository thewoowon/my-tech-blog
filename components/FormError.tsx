import { useEffect } from 'react';
import toast from 'react-hot-toast';

export function FormError({ message }: { message?: string }) {
  useEffect(() => {
    toast.error(message ?? '폼 작성 형식에 맞지 않습니다.', {
      position: 'top-right',
    });
  });
  return <div></div>;
}
