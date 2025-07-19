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
        <main className="max-w-4xl mx-auto mt-8 mb-12 px-4 py-4 space-y-3 min-h-[50vh]">
            <h2 className="text-xl sm:text-2xl font-medium mb-2">Size Guide</h2>
            <span className="text-xs">All the sizes mentioned below are in inches*</span>
            <div>
                <table className="w-full border border-stone-300">
                    <thead className="bg-[#e8e6e2]">
                        <tr>
                            {["Size", "Bust", "Waist", "Hips"].map((col) => (
                                <th key={col} className="border border-[#dddcd8] font-medium text-[15px] px-4 py-2 text-left">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sizeData.sizes.map((row, idx) => (
                            <tr key={idx} className="odd:bg-[#EFEDE9]">
                                {Object.values(row).map((val, i) => (
                                    <td key={i} className="border border-[#dddcd8] px-4 py-2 text-[14px]">{val}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-dark text-center text-[14px]">
                Length may vary by product. Please refer to the product description for specific measurements.
            </p>
        </main>
    );
}

