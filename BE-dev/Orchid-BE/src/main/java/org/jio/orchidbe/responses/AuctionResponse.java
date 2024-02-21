package org.jio.orchidbe.responses;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jio.orchidbe.dtos.api_response.BaseResponse;
import org.jio.orchidbe.dtos.products.ProductDTOResponse;
import org.jio.orchidbe.models.BaseEntity;
import org.jio.orchidbe.models.Status;
import org.jio.orchidbe.models.products.Product;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class AuctionResponse extends BaseResponse {

    private Long id;
    private LocalDateTime endDate;
    private LocalDateTime startDate;
    private Status status;
    private Float depositPrice;
    private Integer quantity;
    private boolean isReject;
    private String reasonReject;
    private String modifiedBy;
    private String productName;
    private String productCode;
    private Integer version;
    private Float startPrice;
    private Float endPrice;
    private LocalDateTime remindAt;
    private Float biddingPrice;
    private ProductDTOResponse product;
    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @JsonProperty("updated_at")
    private LocalDateTime updatedAt;
}
