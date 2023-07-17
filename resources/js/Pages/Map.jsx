import React from 'react'
import { Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Map({auth}) {
  return (
    <AuthenticatedLayout
    user={auth.user}
>
        <div className="text-xl">Allo</div>
    </AuthenticatedLayout>
  );
}
