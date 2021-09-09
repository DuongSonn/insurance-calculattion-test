import { IsDateString, IsIn, IsNotEmpty, IsNumber } from "class-validator";

export class GetProductResponseDto {
    productId: String;
    productTypeCd: String;
    productFamilyCd: String;
    baseSumAssured: Number;
    baseAnnualPremium: Number;
    productTerm: Number;
    premiumPayingTerm: Number;
    paymentFrequencyCd: String;
    planCode: String;
    selected: Boolean;
}

export class GetProductDto {
    @IsNotEmpty()
    genderCd: String;

    @IsNotEmpty()
    @IsDateString()
    dob: String;

    @IsNotEmpty()
    @IsIn(["T11A20", "T11A50", "T11AM1"])
    planCode: String;

    @IsNotEmpty()
    premiumPerYear: Number;

    @IsNotEmpty()
    @IsIn(["YEARLY", "HALFYEARLY", "QUARTERLY", "MONTHLY"])
    paymentFrequency: String;
}