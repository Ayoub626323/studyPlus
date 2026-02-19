"use client";

import React from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";

export default function InscrirePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-900">
                  S&apos;inscrire
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                  Déjà un compte ?{" "}
                  <Link
                    href="/connexion"
                    className="font-medium text-blue-600 underline decoration-2 underline-offset-2 hover:underline focus:outline-none focus:underline"
                  >
                    Connexion
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    className="h-4 w-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  S&apos;inscrire avec Google
                </a>

                <div className="flex items-center py-3 text-xs uppercase text-gray-500 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200">
                  Ou
                </div>

                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm text-gray-900"
                      >
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 sm:py-3"
                        placeholder="vous@exemple.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm text-gray-900"
                      >
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 sm:py-3"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="mb-2 block text-sm text-gray-900"
                      >
                        Confirmer le mot de passe
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 sm:py-3"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 rounded border-gray-300 bg-transparent text-blue-600 shadow-sm focus:ring-0 focus:ring-offset-0 checked:border-blue-600 checked:bg-blue-600 disabled:pointer-events-none disabled:opacity-50"
                      />
                      <label
                        htmlFor="terms"
                        className="ms-3 text-sm text-gray-900"
                      >
                        J&apos;accepte les conditions d&apos;utilisation
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-blue-600 bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:pointer-events-none disabled:opacity-50"
                    >
                      S&apos;inscrire
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
