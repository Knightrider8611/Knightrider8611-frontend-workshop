import Image from "next/image";
export default function CarDetailPage({params}:{params:{cid:string}}){
    //Mock data for demonstration
    const mockCarRepo = new Map();
    mockCarRepo.set("001",{name:"Honda Civic",image:"/img/civic.jpg"});
    mockCarRepo.set("002",{name:"Honda Accord",image:"/img/accord.jpg"});
    mockCarRepo.set("003",{name:"Toyota Fortuner",image:"/img/fortuner.jpg"});
    mockCarRepo.set("004",{name:"Tesla Model 3",image:"/img/tesla.jpg"});
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Car ID : {params.cid}</h1>
            <div className="flex flex-row my-5">
                <Image src={mockCarRepo.get(params.cid).image} alt='Car Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5">{mockCarRepo.get(params.cid).name}</div>
            </div>
        </main>
    );
}
export async function generateStaticParams(){
    return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
}