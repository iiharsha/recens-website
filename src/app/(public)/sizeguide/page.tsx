import { tenorsans } from "@/fonts/fonts";

export default function SizeGuide() {
    const sizeData = {
        sizes: [
            { size: "XS", bust: "32", waist: "26", hips: "34" },
            { size: "S", bust: "34", waist: "28", hips: "36" },
            { size: "M", bust: "36", waist: "30", hips: "38" },
            { size: "L", bust: "38", waist: "32", hips: "40" },
            { size: "XL", bust: "40", waist: "34", hips: "42" },
        ],
    };

    return (
        <main className="max-w-4xl mx-auto mt-4 mb-12 px-4 py-4 space-y-8 min-h-[50vh]">
            <h2 className={`${tenorsans.variable} font-tenor text-center text-3xl sm:text-4xl font-semibold mb-6`}>Size Guide</h2>
            <p className="text-lg text-center text-gray-800">**All the sizes mentioned below are in inches**</p>
            <div>
                <table className="w-full border border-stone-300">
                    <thead className="bg-stone-300">
                        <tr>
                            {["Size", "Bust", "Waist", "Hips"].map((col) => (
                                <th key={col} className={`${tenorsans.variable} font-tenor border border-gray-300 px-4 py-2 text-left`}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sizeData.sizes.map((row, idx) => (
                            <tr key={idx} className="odd:bg-gray-100">
                                {Object.values(row).map((val, i) => (
                                    <td key={i} className="border border-gray-300 px-4 py-2">{val}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-gray-800 text-center text-lg">
                Length may vary by product. Please refer to the product description for specific measurements.
            </p>
        </main>
    );
}

