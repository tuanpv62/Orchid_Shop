package org.jio.orchidbe.models.auctions;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jio.orchidbe.models.BaseEntity;
import org.jio.orchidbe.models.Status;
import org.jio.orchidbe.models.products.Product;

import java.time.LocalDateTime;

@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
@Entity
@Table(name="tbl_aucitons")
public class Auction extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;


    @Column(name = "end_date")
    private LocalDateTime endDate;

    @Column(name = "start_time")
    private LocalDateTime startDate;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "deposit_price")
    private Float depositPrice;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "is_reject", nullable = false)
    private boolean isReject = false;

    @Column(name = "reject-reason")
    private String rejectReason;

    @JoinColumn(name = "product_name")
    private String productName;

    @Column(name = "product_code")
    private String productCode;

    @Column(name = "created_by")
    private String createdBy = "";

    @Column(name = "modified_by")
    private String modifiedBy = "";

    @Version
    @Column(name = "version", nullable = true)
    private  Integer version = 0;

    @Column(name = "start_price")
    private Float startPrice;

   @Column(name = "end_price")
   private Float endPrice;

   @Column(name = "remind_at")
   private LocalDateTime remindAt;

   @Column(name = "bidding_price")
   private Float biddingPrice;

}
