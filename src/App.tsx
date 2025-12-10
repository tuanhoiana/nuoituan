import { Heart, Shield, Clock, Mail, TrendingUp, Coffee, Wallet, Menu, X, Gift, FileText } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentAmount = 2350000;
  const goalAmount = 5000000;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    {
      icon: Shield,
      title: 'Minh bạch tuyệt đối',
      description: 'Mọi giao dịch đều được ghi nhận và công khai. Bạn có thể kiểm tra bất cứ lúc nào.',
    },
    {
      icon: Clock,
      title: 'Cập nhật hàng ngày',
      description: 'Sao kê được cập nhật tự động mỗi ngày lúc 6h sáng. Không delay, không chậm trễ.',
    },
    {
      icon: Mail,
      title: 'Biên lai tự động',
      description: 'Sau khi donate, bạn sẽ nhận được email xác nhận cùng biên lai chi tiết.',
    },
    {
      icon: TrendingUp,
      title: 'Hỗ trợ 24/7',
      description: 'Có thắc mắc? Liên hệ bất cứ lúc nào. Kể cả 3 giờ sáng (nhưng sẽ trả lời sau).',
    },
  ];

  const expenses = [
    { category: 'Hosting & Domain', amount: 30, color: 'bg-blue-500' },
    { category: 'Cà phê & Trà', amount: 25, color: 'bg-green-500' },
    { category: 'Thiết bị & Công cụ', amount: 20, color: 'bg-amber-500' },
    { category: 'Ăn uống', amount: 15, color: 'bg-rose-500' },
    { category: 'Quỹ dự phòng', amount: 10, color: 'bg-violet-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-slate-900">Nuôi Tôi</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-base text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Về tôi
              </button>
              <button
                onClick={() => scrollToSection('statement')}
                className="text-base text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Sao kê
              </button>
              <button
                onClick={() => scrollToSection('support')}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-base"
              >
                Ủng hộ
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-base text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
              >
                Về tôi
              </button>
              <button
                onClick={() => scrollToSection('statement')}
                className="block w-full text-left px-4 py-3 text-base text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
              >
                Sao kê
              </button>
              <button
                onClick={() => scrollToSection('support')}
                className="block w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-base"
              >
                Ủng hộ
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        <header id="home" className="mb-16 sm:mb-24 animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-base font-semibold">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Minh bạch 100%
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Ủng hộ tôi,<br />
                <span className="text-blue-600">không hối hận</span>
              </h1>

              <div className="space-y-2">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Mọi đồng tiền bạn gửi đều được sao kê công khai.
                </p>
                <p className="text-base sm:text-lg text-slate-600 font-bold leading-relaxed">
                  Không lấp liếm, không mập mờ, không đớp, không biến mất bí ẩn.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('support')}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base"
                >
                  <Gift className="w-5 h-5" />
                  Ủng hộ ngay
                </button>
                <button
                  onClick={() => scrollToSection('statement')}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold border border-slate-300 transition-all duration-300 text-base"
                >
                  <FileText className="w-5 h-5" />
                  Xem sao kê
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">127</div>
                  <div className="text-sm sm:text-base text-slate-500">Người ủng hộ</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm sm:text-base text-slate-500">Minh bạch</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">365 ngày</div>
                  <div className="text-sm sm:text-base text-slate-500">Hoạt động</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 border border-slate-200 w-full max-w-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    Đang phát triển
                  </span>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <svg className="transform -rotate-90 w-48 h-48">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-slate-100"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 88}`}
                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - progressPercentage / 100)}`}
                        className="text-blue-600 transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-bold text-slate-900">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Mục tiêu tháng này</p>
                  <div className="flex items-center justify-between text-sm text-slate-600 pt-2">
                    <span>{currentAmount.toLocaleString('vi-VN')} ₫</span>
                    <span>{goalAmount.toLocaleString('vi-VN')} ₫</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="mb-12 sm:mb-16 scroll-mt-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-5 px-4">
            Tại sao nên nuôi tôi?
          </h2>
          <p className="text-center text-slate-600 mb-10 sm:mb-12 text-lg sm:text-xl px-4 max-w-2xl mx-auto">
            Không phải ai cũng xứng đáng được ủng hộ. Nhưng tôi thì có.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-rose-300 group"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="statement" className="mb-12 sm:mb-16 scroll-mt-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-5 px-4">
            Tiền của bạn đi đâu?
          </h2>
          <p className="text-center text-slate-600 mb-10 sm:mb-12 text-lg sm:text-xl px-4 max-w-2xl mx-auto">
            Chi tiết phân bổ chi tiêu hàng tháng
          </p>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-200">
            <div className="space-y-5 sm:space-y-6">
              {expenses.map((expense, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-semibold text-slate-900">
                      {expense.category}
                    </span>
                    <span className="text-base sm:text-lg text-slate-600 font-medium">{expense.amount}%</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${expense.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${expense.amount}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="mb-12 sm:mb-16 scroll-mt-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-5 px-4">
            Chọn cách ủng hộ
          </h2>
          <p className="text-center text-slate-600 mb-10 sm:mb-12 text-lg sm:text-xl px-4 max-w-2xl mx-auto">
            Mọi đóng góp đều được ghi nhận và trân trọng
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-4 sm:mb-5">
                Chuyển khoản
              </h3>
              <div className="bg-slate-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="https://img.vietqr.io/image/VPB-954432777-compact.png"
                    alt="QR Code"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-slate-600">
                <p><span className="font-semibold text-slate-900">Ngân hàng:</span> VP Bank</p>
                <p><span className="font-semibold text-slate-900">STK:</span> 954432777</p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-pink-300 group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  mo<br/>mo
                </div>
              </div>
              <p className="text-center text-slate-600 mb-6">
                Chuyển tiền nhanh qua ví Momo
              </p>
              <button 
                onClick={() => window.open('https://me.momo.vn/nuoituandev', '_blank')}
                className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📱 Mở Momo
              </button>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-300 group sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-4 sm:mb-5">
                Buy Me A Coffee
              </h3>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 sm:p-8 mb-3 sm:mb-4 flex items-center justify-center min-h-[200px] sm:min-h-[240px]">
                <Coffee className="w-20 h-20 sm:w-24 sm:h-24 text-amber-500" />
              </div>
              <p className="text-center text-sm sm:text-base text-slate-600">
                Mua cho tôi một ly cà phê để tôi có thêm năng lượng làm việc!
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white text-center mb-12 sm:mb-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5">Lời nhắn từ tôi</h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 text-rose-50">
              Cảm ơn bạn đã đọc đến đây. Dù bạn có donate hay không,
              tôi vẫn rất trân trọng. Nếu bạn muốn ủng hộ, bất kể
              số tiền nào cũng đều có ý nghĩa với tôi.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">
              Mọi đồng tiền đều được sử dụng đúng mục đích.
            </p>
          </div>
        </div>

        <footer className="border-t border-slate-200 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="font-bold text-lg sm:text-xl text-slate-900">Nuôi Tôi</span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nền tảng ủng hộ với cam kết minh bạch 100%. Mọi giao dịch đều được công khai.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Liên kết</h4>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                <li><a href="#" className="hover:text-rose-500 transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Sao kê giao dịch</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Điều khoản</a></li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Liên hệ</h4>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                <li>Email: contact@nuoitoi.dev</li>
                <li>Facebook: @nuoitoi</li>
                <li>Twitter: @nuoitoi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6 sm:pt-8 text-center">
            <p className="text-slate-600 text-sm sm:text-base mb-2">
              © 2025 Nuôi Tôi. Made with ❤️ in Vietnam.
            </p>
            <p className="text-slate-500 text-sm">
              Đây là trang web mang tính chất cá nhân.
              Mọi thông tin sao kê đều là thật và có thể kiểm chứng.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
