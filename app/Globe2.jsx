import Globe from "@/components/magicui/globe";
export default function Globe2() {
return(
<div className="globe min-h-[70vh] w-[100%] bg-black text-white flex justify-center items-center text-[5vh]">
<div className="main w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique?</div>
<div className="main2 w-[50%]">
<div className="relative  h-[70vh]   items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
     
      <Globe className=" mt-[-5vh]" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
</div>
</div>
);
}