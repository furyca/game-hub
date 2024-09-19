import { usePathname } from "next/navigation";

const useDetailsPage = () => {
  const pathname = usePathname();
  const isDetails = pathname.startsWith("/games");

  return isDetails
};

export default useDetailsPage;
