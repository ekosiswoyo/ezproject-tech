import bsi_image from "@/assets/icons/bsi.png";
import sijitu_image from "@/assets/icons/sijitu.png";
import bpr_maa from "@/assets/icons/bpr mandiri artha abadi logo.jpg";
import smk1sragi from "@/assets/icons/smkn1sragi.jpg";
import roma from "@/assets/icons/roma.png";
import React, { useRef, useState } from "react";

const logosUnique = [
    { src: bsi_image, alt: "BSI" },
    { src: sijitu_image, alt: "SIJITU" },
    { src: bpr_maa, alt: "BPR Mandiri Artha Abadi" },
    { src: smk1sragi, alt: "SMKN 1 Sragi" },
    { src: roma, alt: "Roma Bangunan" },
];

const logos = [...logosUnique, ...logosUnique];

export default function RotatingLogos() {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const scrollStartX = useRef(0);

    function onMouseDown(e) {
        setIsPaused(true);
        setIsDragging(true);
        dragStartX.current = e.pageX;
        scrollStartX.current = containerRef.current.scrollLeft;
    }

    function onMouseMove(e) {
        if (!isDragging) return;
        const deltaX = e.pageX - dragStartX.current;
        containerRef.current.scrollLeft = scrollStartX.current - deltaX;
    }

    function onMouseUp() {
        setIsDragging(false);
        setIsPaused(false);
    }

    function onTouchStart(e) {
        setIsPaused(true);
        setIsDragging(true);
        dragStartX.current = e.touches[0].pageX;
        scrollStartX.current = containerRef.current.scrollLeft;
    }

    function onTouchMove(e) {
        if (!isDragging) return;
        const deltaX = e.touches[0].pageX - dragStartX.current;
        containerRef.current.scrollLeft = scrollStartX.current - deltaX;
    }

    function onTouchEnd() {
        setIsDragging(false);
        setIsPaused(false);
    }

    return (
        <div className="overflow-hidden w-full py-12 bg-transparent">
            <div
                ref={containerRef}
                className={`flex gap-16 min-w-[200%] ${isPaused ? "" : "animate-marquee"} cursor-grab select-none`}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={isDragging ? onMouseUp : undefined}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{ scrollBehavior: "auto" }}
            >
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-20 w-auto object-contain inline-block"
                        draggable={false}
                    />
                ))}
            </div>
        </div>
    );
}
