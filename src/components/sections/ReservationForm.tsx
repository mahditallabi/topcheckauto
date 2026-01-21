import { MapPin, Clock, Calendar, User, Car, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ReservationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    carType: "",
    date: "",
    time: "",
    message: ""
  });

  const cities = [
    "الدار البيضاء",
    "الرباط",
    "فاس",
    "مراكش",
    "طنجة",
    "مكناس",
    "أكادير",
    "وجدة",
    "تطوان",
    "القنيطرة",
    "بن جرير",
    "بنسليمان",
    "آسفي",
    "الجديدة",
    "آيت ملول",
    "الناظور",
    "سلا",
    "خريبكة",
    "تمارة",
    "العيون",
    "تازة",
    "العرائش",
    "وزان",
    "سيدي قاسم",
    "مدن أخرى"
  ];

  const carTypes = [
    "سيارة صالون",
    "سيارة دفع رباعي (SUV)",
    "سيارة عائلية",
    "سيارة رياضية",
    "سيارة كهربائية",
    "سيارة هجينة",
    "سيارة تجارية",
    "دراجة نارية",
    "أخرى"
  ];

  const timeSlots = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
    console.log("Form data:", formData);
    setIsSubmitted(true);
    
    // إعادة تعيين النموذج بعد 5 ثواني
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        carType: "",
        date: "",
        time: "",
        message: ""
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-border shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              تم إرسال طلب الحجز بنجاح!
            </h3>
            <p className="text-muted-foreground text-lg">
              شكراً لك، سنتواصل معك في أقرب وقت ممكن لتأكيد الموعد.
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            رقم الطلب: <span className="font-mono font-bold">TC-{Date.now().toString().slice(-6)}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-border shadow-lg">
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          احجز موعد فحص
        </h3>
        <p className="text-muted-foreground">
          املأ النموذج وسنتواصل معك خلال 24 ساعة
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* الاسم الكامل */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <User className="w-4 h-4" />
              الاسم الكامل *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="أدخل اسمك الكامل"
              required
              className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary"
            />
          </div>

          {/* رقم الهاتف */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              رقم الهاتف *
            </label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+212 600-000000"
              required
              className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary"
              dir="ltr"
            />
          </div>

          {/* البريد الإلكتروني */}
          {/* <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              البريد الإلكتروني
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary"
              dir="ltr"
            />
          </div> */}

          {/* المدينة */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin className="w-4 h-4" />
              المدينة *
            </label>
            <Select
              value={formData.city}
              onValueChange={(value) => handleSelectChange("city", value)}
              required
            >
              <SelectTrigger className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary">
                <SelectValue placeholder="اختر مدينتك" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* نوع السيارة */}
          {/* <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Car className="w-4 h-4" />
              نوع السيارة *
            </label>
            <Select
              value={formData.carType}
              onValueChange={(value) => handleSelectChange("carType", value)}
              required
            >
              <SelectTrigger className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary">
                <SelectValue placeholder="اختر نوع السيارة" />
              </SelectTrigger>
              <SelectContent>
                {carTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          {/* التاريخ */}
          {/* <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Calendar className="w-4 h-4" />
              التاريخ المفضل *
            </label>
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary"
              min={new Date().toISOString().split('T')[0]}
            />
          </div> */}

          {/* الوقت */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Clock className="w-4 h-4" />
              الوقت المفضل *
            </label>
            <Select
              value={formData.time}
              onValueChange={(value) => handleSelectChange("time", value)}
              required
            >
              <SelectTrigger className="h-12 rounded-xl border-border bg-secondary/50 focus:border-primary">
                <SelectValue placeholder="اختر الوقت" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* الرسالة */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <MessageSquare className="w-4 h-4" />
            ملاحظات إضافية
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="أي معلومات إضافية عن السيارة أو طلبات خاصة..."
            rows={4}
            className="rounded-xl border-border bg-secondary/50 focus:border-primary resize-none"
          />
        </div>

        {/* زر الإرسال */}
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            إرسال طلب الحجز
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            بالضغط على الزر، أنت توافق على 
            <a href="#" className="text-primary hover:underline mr-1"> شروط الخدمة </a>
            و
            <a href="#" className="text-primary hover:underline mr-1"> سياسة الخصوصية</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;