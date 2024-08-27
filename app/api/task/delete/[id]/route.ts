// types
import { IDeleteTaskRequestParam } from "@types";

// models
import Task from "@models/tasks";

// utils
import { connectToDB } from "@utils/db";

// next
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();
    await Task.findByIdAndDelete(params.id);
    return NextResponse.json("Task delete", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed", { status: 500 });
  }
};
