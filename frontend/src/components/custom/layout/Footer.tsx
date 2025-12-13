import { Separator } from "@/components/ui/separator";
import { Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className="bg-slate-900 flex flex-col items-center justify-center gap-2 px-6 pt-16 pb-12 [clip-path:polygon(0_0,100%_10%,100%_100%,0_100%)]">
            <Button variant="link" className="bg-slate-800 text-white"><ArrowUp/></Button>
            
            <Button variant="link" className="text-white text-xs">Home</Button>
            <Button variant="link" className="text-white text-xs">Services</Button>
            <Button variant="link" className="text-white text-xs">Photos</Button>
            <Button variant="link" className="text-white text-xs">FAQs</Button>
            
            <Separator className="bg-gray-700 my-4"/>

  
            <div className="flex flex-row items-center gap-4 w-full">
                <Button variant="link" size="sm" className="bg-slate-800 text-white text-xs">
                    Our Instagram <Instagram />
                </Button>

                <Separator orientation="vertical" className="bg-gray-700 my-4"/>

                <div className="flex flex-col gap-4 text-gray-400 text-xs text-balance min-w-[50%]">
                    <p>© {year} ET Fadezz. All rights reserved.</p>
                    <p>Website by Golden Coast Digital, LLC</p>
                </div>
            </div>
        </footer>
    )
}