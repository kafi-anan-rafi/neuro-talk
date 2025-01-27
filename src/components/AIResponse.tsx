import { AiOutlineDingtalk } from "react-icons/ai";

interface AIResponseProps {
  data: { prompt: string; response: string }[];
}

export default function AIResponse({ data }: AIResponseProps) {
  return (
    <div className="md:w-3/4 mx-auto pb-24">
      {data.map((item, index) => (
        <div key={index} className="m-2">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div className="bg-slate-700 text-white rounded-3xl px-4 py-2 max-w-lg">
                {item.prompt}
              </div>
            </div>
            <div className="flex justify-start m-2">
              <div className="relative rounded-xl px-4 py-2">
                <AiOutlineDingtalk className="absolute top-5 left-0 w-6 h-6 p-1 border rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <p className="ml-2">{item.response}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
