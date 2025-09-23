import { ReactNode, Suspense } from "react";
import { BarLoader } from "react-spinners";
import { Metadata } from "next";
import InterviewHeader from "../../interviews/_component/InterviewHeader";
interface LayoutProps {
    children: ReactNode;
}
export const metadata: Metadata = {
    title: "NeoLearn",
    description: "instructor module",
  };
const CourseLayout: React.FC<LayoutProps> = ({ children }) => {
    return (


        <div className="space-y-6">
            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>
                {children}
            </Suspense>

        </div>



    );
};

export default CourseLayout;
