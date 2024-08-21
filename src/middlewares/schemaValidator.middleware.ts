import { NextFunction, Request, Response } from "express";

export const schemaValidation = () => (req: Request, res: Response, next: NextFunction) => {
    console.log("execute something")
}