import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly rollNumber: number;

    @IsNumber()
    @IsNotEmpty()
    readonly class: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;
    
    @IsString()
    @IsNotEmpty()
    readonly marks: number;

}