'use strict'
module.exports = function(args, check) {
  check(args, "after_sale_id", "Number");
  check(args, "approve_status", "String");
  check(args, "auction_point", "Number");
  check(args, "auto_fill", "String");
  check(args, "auto_repost", "Boolean");
  check(args, "barcode", "String");
  check(args, "change_prop", "String");
  check(args, "chaoshi_extends_info", "String");
  check(args, "cid", "Number");
  check(args, "cod_postage_id", "Number");
  check(args, "delivery_time.delivery_time", "String");
  check(args, "delivery_time.delivery_time_type", "String");
  check(args, "delivery_time.need_delivery_time", "String");
  check(args, "desc", "String");
  check(args, "desc_modules", "String");
  check(args, "empty_fields", "String");
  check(args, "ems_fee", "Price");
  check(args, "express_fee", "Price");
  check(args, "features", "String");
  check(args, "food_security.contact", "String");
  check(args, "food_security.design_code", "String");
  check(args, "food_security.factory", "String");
  check(args, "food_security.factory_site", "String");
  check(args, "food_security.food_additive", "String");
  check(args, "food_security.health_product_no", "String");
  check(args, "food_security.mix", "String");
  check(args, "food_security.period", "String");
  check(args, "food_security.plan_storage", "String");
  check(args, "food_security.prd_license_no", "String");
  check(args, "food_security.product_date_end", "String");
  check(args, "food_security.product_date_start", "String");
  check(args, "food_security.stock_date_end", "String");
  check(args, "food_security.stock_date_start", "String");
  check(args, "food_security.supplier", "String");
  check(args, "freight_payer", "String");
  check(args, "global_stock_country", "String");
  check(args, "global_stock_delivery_place", "String");
  check(args, "global_stock_tax_free_promise", "Boolean");
  check(args, "global_stock_type", "String");
  check(args, "has_discount", "Boolean");
  check(args, "has_invoice", "Boolean");
  check(args, "has_showcase", "Boolean");
  check(args, "has_warranty", "Boolean");
  check(args, "ignorewarning", "String");
  check(args, "image", "byte[]");
  check(args, "increment", "Price");
  check(args, "input_pids", "String");
  check(args, "input_str", "String");
  check(args, "is_3D", "Boolean");
  check(args, "is_ex", "Boolean");
  check(args, "is_lightning_consignment", "Boolean");
  check(args, "is_offline", "String");
  check(args, "is_replace_sku", "Boolean");
  check(args, "is_taobao", "Boolean");
  check(args, "is_xinpin", "Boolean");
  check(args, "item_size", "String");
  check(args, "item_weight", "String");
  check(args, "lang", "String");
  check(args, "list_time", "Date");
  check(args, "locality_life.choose_logis", "String");
  check(args, "locality_life.eticket", "String");
  check(args, "locality_life.expirydate", "String");
  check(args, "locality_life.merchant", "String");
  check(args, "locality_life.network_id", "String");
  check(args, "locality_life.obs", "String");
  check(args, "locality_life.onsale_auto_refund_ratio", "Number");
  check(args, "locality_life.packageid", "String");
  check(args, "locality_life.refund_ratio", "Number");
  check(args, "locality_life.refundmafee", "String");
  check(args, "locality_life.verification", "String");
  check(args, "locality_life.version", "String");
  check(args, "location.city", "String");
  check(args, "location.state", "String");
  check(args, "ms_payment.price", "String");
  check(args, "ms_payment.reference_price", "String");
  check(args, "ms_payment.voucher_price", "String");
  check(args, "newprepay", "String");
  check(args, "num", "Number");
  check(args, "num_iid", "Number", true);
  check(args, "o2o_bind_service", "Boolean");
  check(args, "outer_id", "String");
  check(args, "paimai_info.deposit", "Number");
  check(args, "paimai_info.interval", "Number");
  check(args, "paimai_info.mode", "Number");
  check(args, "paimai_info.reserve", "Price");
  check(args, "paimai_info.valid_hour", "Number");
  check(args, "paimai_info.valid_minute", "Number");
  check(args, "pic_path", "String");
  check(args, "post_fee", "Price");
  check(args, "postage_id", "Number");
  check(args, "price", "Price");
  check(args, "product_id", "Number");
  check(args, "property_alias", "String");
  check(args, "props", "String");
  check(args, "qualification", "String");
  check(args, "scenic_ticket_book_cost", "String");
  check(args, "scenic_ticket_pay_way", "Number");
  check(args, "sell_point", "String");
  check(args, "sell_promise", "Boolean");
  check(args, "seller_cids", "String");
  check(args, "shape", "String");
  check(args, "sku_barcode", "String");
  check(args, "sku_delivery_times", "String");
  check(args, "sku_hd_height", "String");
  check(args, "sku_hd_lamp_quantity", "String");
  check(args, "sku_hd_length", "String");
  check(args, "sku_outer_ids", "String");
  check(args, "sku_prices", "String");
  check(args, "sku_properties", "String");
  check(args, "sku_quantities", "String");
  check(args, "sku_spec_ids", "String");
  check(args, "spu_confirm", "Boolean");
  check(args, "stuff_status", "String");
  check(args, "sub_stock", "Number");
  check(args, "title", "String");
  check(args, "valid_thru", "Number");
  check(args, "weight", "Number");
  check(args, "wireless_desc", "String");
}
