import { Phone, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Nav() {
    return(
        <>
            <div className="flex flex-col gap-6 bg-slate-900 px-6 pt-12 pb-16 [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]">
                <div className="flex flex-row items-start gap-6">
                    <img src="/src/assets/logo-white.svg" alt="ET Fadezz Logo" className="w-24 h-24"/>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-medium text-white">ET Fadezz</h1>
                        <p className="text-gray-400 text-base text-balance">
                            Professional barber based in Fontana, CA serving Los Angeles, Orange, and San Bernardino counties.
                        </p>

                        <div className="flex flex-row items-center gap-4">
                            <Button variant="default" size="icon" className="bg-slate-800 size-14">
                                <Phone />
                            </Button>

                            <Button variant="default" size="icon" className="bg-slate-800 size-14">
                                <MessageCircle />
                            </Button>

                            <Button variant="default" size="icon" className="bg-slate-800 size-14">
                                <Instagram />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}