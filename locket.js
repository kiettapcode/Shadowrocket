// Bản sạch mở khóa Locket Gold cục bộ
let obj = JSON.parse($response.body);
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// Định nghĩa gói Gold giả lập an toàn
const goldInfo = {
    "expires_date": "2099-12-31T23:59:59Z",
    "original_purchase_date": "2026-05-28T00:00:00Z",
    "purchase_date": "2026-05-28T00:00:00Z",
    "ownership_type": "PURCHASED"
};

obj.subscriber.subscriptions["locket_gold_yearly"] = goldInfo;
obj.subscriber.entitlements["Gold"] = {
    "expires_date": "2099-12-31T23:59:59Z",
    "product_identifier": "locket_gold_yearly",
    "purchase_date": "2026-05-28T00:00:00Z"
};

$done({body: JSON.stringify(obj)});
