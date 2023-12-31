import DarkModeToggle from "@/Components/DarkModeToggle";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import SideBar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            /* header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>} */
        >
            <Head title="Dashboard" />

            <div className="sm:flex">
                {/* Left content */}
                {/* hide Sidebar in smaller screens */}
                <div className="hidden sm:block">
                    <SideBar />
                </div>
                {/* Right content */}
                <div className="py-8 w-full">
                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                                "On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled
                                and demoralized by the charms of pleasure of the
                                moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to
                                ensue; and equal blame belongs to those who fail
                                in their duty through weakness of will, which is
                                the same as saying through shrinking from toil
                                and pain. These cases are perfectly simple and
                                easy to distinguish. In a free hour, when our
                                power of choice is untrammelled and when nothing
                                prevents our being able to do what we like best,
                                every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business it will frequently occur that pleasures
                                have to be repudiated and annoyances accepted.
                                The wise man therefore always holds in these
                                matters to this principle of selection: he
                                rejects pleasures to secure other greater
                                pleasures, or else he endures pains to avoid
                                worse pains.""On the other hand, we denounce
                                with righteous indignation and dislike men who
                                are so beguiled and demoralized by the charms of
                                pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble
                                that are bound to ensue; and equal blame belongs
                                to those who fail in their duty through weakness
                                of will, which is the same as saying through
                                shrinking from toil and pain. These cases are
                                perfectly simple and easy to distinguish. In a
                                free hour, when our power of choice is
                                untrammelled and when nothing prevents our being
                                able to do what we like best, every pleasure is
                                to be welcomed and every pain avoided. But in
                                certain circumstances and owing to the claims of
                                duty or the obligations of business it will
                                frequently occur that pleasures have to be
                                repudiated and annoyances accepted. The wise man
                                therefore always holds in these matters to this
                                principle of selection: he rejects pleasures to
                                secure other greater pleasures, or else he
                                endures pains to avoid worse pains.""On the
                                other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled
                                and demoralized by the charms of pleasure of the
                                moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to
                                ensue; and equal blame belongs to those who fail
                                in their duty through weakness of will, which is
                                the same as saying through shrinking from toil
                                and pain. These cases are perfectly simple and
                                easy to distinguish. In a free hour, when our
                                power of choice is untrammelled and when nothing
                                prevents our being able to do what we like best,
                                every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business it will frequently occur that pleasures
                                have to be repudiated and annoyances accepted.
                                The wise man therefore always holds in these
                                matters to this principle of selection: he
                                rejects pleasures to secure other greater
                                pleasures, or else he endures pains to avoid
                                worse pains.""On the other hand, we denounce
                                with righteous indignation and dislike men who
                                are so beguiled and demoralized by the charms of
                                pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble
                                that are bound to ensue; and equal blame belongs
                                to those who fail in their duty through weakness
                                of will, which is the same as saying through
                                shrinking from toil and pain. These cases are
                                perfectly simple and easy to distinguish. In a
                                free hour, when our power of choice is
                                untrammelled and when nothing prevents our being
                                able to do what we like best, every pleasure is
                                to be welcomed and every pain avoided. But in
                                certain circumstances and owing to the claims of
                                duty or the obligations of business it will
                                frequently occur that pleasures have to be
                                repudiated and annoyances accepted. The wise man
                                therefore always holds in these matters to this
                                principle of selection: he rejects pleasures to
                                secure other greater pleasures, or else he
                                endures pains to avoid worse pains.""On the
                                other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled
                                and demoralized by the charms of pleasure of the
                                moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to
                                ensue; and equal blame belongs to those who fail
                                in their duty through weakness of will, which is
                                the same as saying through shrinking from toil
                                and pain. These cases are perfectly simple and
                                easy to distinguish. In a free hour, when our
                                power of choice is untrammelled and when nothing
                                prevents our being able to do what we like best,
                                every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business it will frequently occur that pleasures
                                have to be repudiated and annoyances accepted.
                                The wise man therefore always holds in these
                                matters to this principle of selection: he
                                rejects pleasures to secure other greater
                                pleasures, or else he endures pains to avoid
                                worse pains.""On the other hand, we denounce
                                with righteous indignation and dislike men who
                                are so beguiled and demoralized by the charms of
                                pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble
                                that are bound to ensue; and equal blame belongs
                                to those who fail in their duty through weakness
                                of will, which is the same as saying through
                                shrinking from toil and pain. These cases are
                                perfectly simple and easy to distinguish. In a
                                free hour, when our power of choice is
                                untrammelled and when nothing prevents our being
                                able to do what we like best, every pleasure is
                                to be welcomed and every pain avoided. But in
                                certain circumstances and owing to the claims of
                                duty or the obligations of business it will
                                frequently occur that pleasures have to be
                                repudiated and annoyances accepted. The wise man
                                therefore always holds in these matters to this
                                principle of selection: he rejects pleasures to
                                secure other greater pleasures, or else he
                                endures pains to avoid worse pains."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
