import { Injectable } from '@nestjs/common';
import { GetProductDto, GetProductResponseDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    async getProduct(data: GetProductDto): Promise<GetProductResponseDto> {
        let response = new GetProductResponseDto();
        response.productId = "ECOMBIG3";
        response.productTypeCd = "PLAN";
        response.productFamilyCd = "TERM";
        response.baseSumAssured = 1205594;
        response.baseAnnualPremium = data.premiumPerYear;
        response.productTerm = 5;
        response.premiumPayingTerm = 5;
        response.paymentFrequencyCd = data.paymentFrequency;
        response.planCode = data.planCode;
        response.selected = true;

        return response;
    }
}