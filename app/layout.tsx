import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilgi Okyanusunda Yüzün - Coursetopus",
  description:
    "Coursetopus: Bilgiye Ulaşımın Yepyeni Yolu! Coursetopus ile yeni beceriler öğrenmek, ilgi alanlarınızı genişletmek ve kariyerinizi geliştirmek artık daha kolay ve eğlenceli. Binlerce çeşitli kurs seçeneği arasından istediğinizi seçin. Dijital pazarlamadan programlamaya, yemek yapmaktan yoga eğitimine kadar birçok alanda kendinizi geliştirin.  🚀 Kişiselleştirilmiş Öğrenme: İhtiyaçlarınıza uygun kursları seçin ve kendi hızınızda öğrenin. 🌐 Uzman Eğitmenler: Alanında uzman eğitmenlerden öğrenin ve gerçek dünya deneyimlerini paylaşan kişilerle bağlantı kurun. 📆 Esnek Zamanlama: Kursları istediğiniz zaman ve istediğiniz yerden erişin - ofis, ev veya seyahatte! 🏆 Sertifikasyonlar: Kursları tamamladığınızda sertifikalar alın ve başkalarına yeteneklerinizi kanıtlayın. Coursetopus ile öğrenme deneyiminizi kişiselleştirin ve kariyerinizi bir üst seviyeye taşıyın. Bilgiye erişim sizin kontrolünüzde. Hemen bugün kaydolun ve yeni bir dünyanın kapılarını aralayın!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
