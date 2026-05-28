// Bản sạch mở khóa các tính năng của SoundCloud Go+ cục bộ
let obj = JSON.parse($response.body);
if (obj.collection) {
    obj.collection.forEach(item => {
        if (item.key === "premium_features_enabled") item.value = true;
        if (item.key === "go_plus_user") item.value = true;
    });
} else {
    obj.premium_features_enabled = true;
    obj.go_plus_user = true;
}
$done({body: JSON.stringify(obj)});
