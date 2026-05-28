// Bản sạch tối ưu từ Maasea - Chỉ xử lý dữ liệu YouTube cục bộ
const obj = JSON.parse($response.body);
if (obj.responseContext) {
    // Xóa bỏ các luồng quảng cáo trong danh sách video và shorts
    if (obj.contents) {
        delete obj.adPlacements;
        delete obj.megabar;
    }
    // Kích hoạt tính năng chạy nền và PiP (Hình trong hình)
    if (obj.playerAds) delete obj.playerAds;
    if (obj.playbackTracking) {
        obj.playbackTracking.videostatsPlaybackUrl = { uri: "https://www.youtube.com/pagead/gen_204?id=playback" };
    }
}
$done({body: JSON.stringify(obj)});
