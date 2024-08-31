/* eslint-disable react/prop-types */
import { MailCheckIcon } from "lucide-react";

function StudentDetails({data}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/images/studentProfile.jfif"
        className="w-[100px] aspect-square rounded-full object-cover my-4"
      />
      <h3 className="text-xl font-semibold text-purple-900">{data?.name}</h3>
      <h3 className="text-xl font-semibold text-purple-900 flex items-center">
        <MailCheckIcon className="mr-2" />
        {data?.email}
      </h3>
    </div>
  );
}

export default StudentDetails;
