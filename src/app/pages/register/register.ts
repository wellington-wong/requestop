import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div
        class="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6"
      >
        <div class="text-center space-y-2">
          <div
            class="h-10 w-10 bg-indigo-600 rounded-xl mx-auto flex items-center justify-center text-white font-bold text-lg"
          >
            R
          </div>
          <h2 class="text-xl font-bold text-slate-900">Create an account</h2>
          <p class="text-sm text-slate-500">Get started with your free workspace</p>
        </div>

        <form class="space-y-4" (submit)="$event.preventDefault()">
          <div class="space-y-1">
            <label class="text-xs font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              placeholder="Alex Rivera"
              class="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
          </div>

          <div class="space-y-1">
            <label class="text-xs font-medium text-slate-700">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              class="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
          </div>

          <div class="space-y-1">
            <label class="text-xs font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
            />
          </div>

          <a
            routerLink="/"
            class="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </form>

        <p class="text-center text-xs text-slate-500">
          Already have an account?
          <a routerLink="/login" class="text-indigo-600 font-medium hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  `,
})
export class Register {}
