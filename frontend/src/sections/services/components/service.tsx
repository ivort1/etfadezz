interface ServiceItemProps {
    id: string,
    serviceName: string;
    serviceDescription: string;
    servicePrice: string;
    serviceImage: string;
}

export default function ServiceItem({ service: { id, serviceName, serviceDescription, servicePrice, serviceImage} }: { service: ServiceItemProps }) {
    return(
        <div key={id} className="flex items-center justify-between gap-2">
            <img src={serviceImage} alt={serviceName} className="w-12 h-12"/>

            <div className="max-w-[65%] flex flex-col gap-2">
                <h2 className="text-sm font-medium">{serviceName}</h2>
                <p className="text-gray-500 text-xs text-pretty">{serviceDescription}</p>
                <div className="text-xs">{servicePrice}</div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-90deg] text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
        </div>
    )
}