import Chat from '@/components/Chat';
import Sidebar from '@/components/Sidebar';

export default function Home() {
    return (
        <>
            <Sidebar/>
            <div className="flex min-h-screen bg-slate-50 items-center justify-end pr-5">
                <Chat />            
            </div>
        </>
    )
}
