import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full bg-gradient-to-b from-[#1B1B1F] via-[#0F1013] to-[#050607]
                    text-white py-20 px-6 md:px-10 lg:px-20">

      <div class="max-w-4xl mx-auto">

        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-semibold">
            Invest in bonds with <br />
            <span class="text-4xl md:text-5xl font-bold">9–12% Fixed Returns</span>
          </h2>
          <!-- Decorative Underline -->
        <div class="w-50 h-1 bg-[linear-gradient(90deg,#626262_0%,#C4C3C3_50%,#626262_100%)] 
                    rounded-full mx-auto mt-3">
        </div>
          <p class="mt-4 text-xs md:text-sm tracking-wide text-gray-400 uppercase">
            SEBI Registered &nbsp; | &nbsp; Start with just ₹1,000 today &nbsp; | &nbsp; Sell Anytime
          </p>
        </div>

        <!-- FAQ Title -->
        <h3 class="text-sm md:text-base font-semibold text-gray-200 mb-4">
          Frequently Asked Questions
        </h3>

        <!-- FAQ LIST -->
        <div class="space-y-3">
          <div *ngFor="let item of faqs; let i = index">

            <!-- Single FAQ Box -->
            <div class="bg-[#25262C]/90 hover:bg-[#2B2C33] 
                        border border-[#33343A]
                        rounded-2xl overflow-hidden transition">

              <!-- Question Row -->
              <button
                class="w-full flex justify-between items-center 
                       px-5 md:px-6 py-4 md:py-5 text-left"
                (click)="toggle(i)"
              >
                <span class="text-sm md:text-base font-medium">
                  {{ item.question }}
                </span>

                <span class="w-6 h-6 flex items-center justify-center 
                             rounded-full bg-[#33343A] text-xs md:text-sm">
                  {{ openIndex === i ? '−' : '+' }}
                </span>
              </button>

              <!-- Answer (inside same rounded box) -->
              <div
                *ngIf="openIndex === i"
                class="px-5 md:px-6 pb-5 md:pb-6 text-xs md:text-sm text-gray-300 
                       border-t border-[#33343A]"
              >
                {{ item.answer }}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styleUrls: ['./faq-section.css']
})
export class FaqSection {

  faqs: FaqItem[] = [
    {
      question: 'Can I use Spline for free?',
      answer:
        'Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.'
    },
    {
      question: 'Why should I upgrade to Super or Super Team?',
      answer:
        'Upgrading unlocks more projects, higher limits and advanced collaboration features perfect for growing teams.'
    },
    {
      question: 'What payment methods can I use?',
      answer:
        'We support major credit and debit cards, UPI, and popular net banking options depending on your region.'
    },
    {
      question: 'How does team billing work?',
      answer:
        'You pay for the total number of active seats in your workspace. Seats can be reassigned anytime.'
    },
    {
      question: 'How can I cancel my subscription?',
      answer:
        'You can cancel anytime from your billing settings. Your plan will remain active until the end of the billing period.'
    },
    {
      question: 'Can I change from monthly to yearly?',
      answer:
        'Yes, you can switch between monthly and yearly billing cycles from your account settings.'
    },
    {
      question: 'How can I ask other questions about pricing?',
      answer:
        'Reach out to our support team via chat or email and we’ll be happy to help.'
    },
    {
      question: 'Interested in Spline for Education?',
      answer:
        'We offer special plans and discounts for educational use. Contact us with your institute details.'
    }
  ];

  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
