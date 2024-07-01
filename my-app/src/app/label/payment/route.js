
import connectMongoDB from "../../../../libs/mongodb";
import Payment from "../../../../models/payments";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { id, label, amount, status, time } = await request.json();
        await connectMongoDB;
        await Payment.create({ id, label, amount, status, time });
        return NextResponse.json({ message: "Payment Successful" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Payment Failed", error: error.message }, { status: 500 });
    }
}
