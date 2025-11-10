import ProductPage from "@/components/ui/product/paket/productPage"
import { motion } from "framer-motion";

export default function paketPage() {
    return (
        <>
            <div className="mb-10 relative overflow-hidden">
                {/* Animation Circle Atas */}
                <motion.div
                    className="absolute top-[100px] -right-[250px] w-[400px] h-[400px] rounded-full bg-[#7FB8A7] opacity-40 -z-10 sm:-z-10 lg:-z-10 2xl:z-10 3xl:z-0"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[300px] right-[50px] w-[200px] h-[200px] rounded-full bg-[#7FB8A7] opacity-40 -z-10 sm:-z-10 lg:-z-10 2xl:z-10 3xl:z-0"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[500px] right-[20px] w-[60px] h-[60px] rounded-full bg-[#7FB8A7] opacity-40 -z-10 sm:-z-10 lg:-z-10 2xl:z-10 3xl:z-0"
                    animate={{ x: [0, 30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Animation Circle Bawah */}
                <motion.div
                    className="absolute bottom-[100px] -left-[250px] w-[400px] h-[400px] rounded-full bg-[#7FB8A7] opacity-40 -z-10 sm:-z-10 lg:-z-10 2xl:z-10 3xl:z-0"
                    animate={{ y: [0, 40, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[300px] left-[50px] w-[200px] h-[200px] rounded-full bg-[#7FB8A7] opacity-40 -z-10 sm:-z-10 lg:-z-10 2xl:z-10 3xl:z-0"
                    animate={{ x: [0, -25, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[500px] left-[20px] w-[60px] h-[60px] rounded-full bg-[#7FB8A7] opacity-40 -z-10 sm:-z-10 lg:-z-10 2xl:z-10 3xl:z-0  "
                    animate={{ x: [0, -30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="mb-20">
                    <ProductPage />
                </div>
                
            </div>

        </>
    )

}