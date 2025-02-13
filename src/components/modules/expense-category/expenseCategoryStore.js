import axios from "axios";
import { useState } from "react";
import formatValidationErrors from "../../utils/format-validation-error";
import { useNotificationStore } from "../../shared/notification/notificationstore";

export function useExpenseCategoryStore() {
    const [current_page, setCurrentPage] = useState(1);
    const [total_pages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [q_name, setQName] = useState("");
    const [expense_categories, setExpenseCategories] = useState([]);
    const [edit_expense_category_id, setEditExpenseCategoryId] = useState(null);
    const [view_expense_category_id, setViewExpenseCategoryId] = useState(null);
    const [add_expense_category_errors, setAddExpenseCategoryErrors] = useState({});
    const [edit_expense_category_errors, setEditExpenseCategoryErrors] = useState({});
    const [current_expense_category_item, setCurrentExpenseCategoryItem] = useState({
        id: "",
        name: "",
    });

    const resetCurrentExpenseCatData = () => {
        setCurrentExpenseCategoryItem({
            id: "",
            name: "",
        });
        setAddExpenseCategoryErrors([]);
        setEditExpenseCategoryErrors([]);
    };

    const fetchCatList = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`/api/expense-categories/list`)
                .then((response) => {
                    resolve(response.data.data);
                })
                .catch((errors) => {
                    reject(errors);
                });
        });
    };

    const fetchExpenseCats = (page, limit, q_name = "") => {
        return new Promise((resolve, reject) => {
            axios
                .get(`/api/expense-categories?page=${page}&limit=${limit}&name=${q_name}`)
                .then((response) => {
                    setExpenseCategories(response.data.data);
                    if (response.data.meta) {
                        setTotalPages(response.data.meta.last_page);
                        setCurrentPage(response.data.meta.current_page);
                        setLimit(response.data.meta.per_page);
                        setQName(q_name);
                    }
                    resolve(response.data.data);
                })
                .catch((errors) => {
                    reject(errors);
                });
        });
    };

    const fetchExpenseCat = (id) => {
        return new Promise((resolve, reject) => {
            axios
                .get(`/api/expense-categories/${id}`)
                .then((response) => {
                    setCurrentExpenseCategoryItem(response.data.data);
                    resolve(response.data.data);
                })
                .catch((errors) => {
                    reject(errors);
                });
        });
    };

    const addExpenseCat = (data) => {
        return new Promise((resolve, reject) => {
            axios
                .post(`/api/expense-categories`, data)
                .then((response) => {
                    resetCurrentExpenseCatData();
                    const notifcationStore = useNotificationStore();
                    notifcationStore.pushNotification({
                        message: "ExpenseCat Added Successfully",
                        type: "success",
                        time: 2000,
                    });

                    resolve();
                })
                .catch((error) => {
                    const notifcationStore = useNotificationStore();
                    notifcationStore.pushNotification({
                        message: "Error Occurred",
                        type: "error",
                        time: 2000,
                    });

                    if (error.response.status == 422) {
                        setAddExpenseCategoryErrors(formatValidationErrors(error.response.data.errors));
                    }
                    reject(error);
                });
        });
    };

    const editExpenseCat = (data) => {
        return new Promise((resolve, reject) => {
            axios
                .put(`/api/expense-categories/${edit_expense_category_id}`, data)
                .then((response) => {
                    resetCurrentExpenseCatData();
                    const notifcationStore = useNotificationStore();
                    notifcationStore.pushNotification({
                        message: "expense category updated successfully",
                        type: "success",
                    });
                    resolve(response);
                })
                .catch((errors) => {
                    const notifcationStore = useNotificationStore();
                    notifcationStore.pushNotification({
                        message: "Error Occurred",
                        type: "error",
                    });

                    if (errors.response.status == 422) {
                        setEditExpenseCategoryErrors(formatValidationErrors(errors.response.data.errors));
                    }
                    reject(errors);
                });
        });
    };

    const deleteExpenseCat = (id) => {
        return new Promise((resolve, reject) => {
            axios
                .delete(`/api/expense-categories/${id}`)
                .then((response) => {
                    if (
                        expense_categories.length == 1 ||
                        (Array.isArray(id) && id.length == expense_categories.length)
                    ) {
                        setCurrentPage(current_page == 1 ? 1 : current_page - 1);
                    }

                    resetCurrentExpenseCatData();
                    const notifcationStore = useNotificationStore();
                    notifcationStore.pushNotification({
                        message: "expense category deleted successfully",
                        type: "success",
                        time: 2000,
                    });

                    resolve(response);
                })
                .catch((errors) => {
                    if (
                        errors.response.data.error_type &&
                        errors.response.data.error_type == "HAS_CHILD_ERROR"
                    ) {
                        const notifcationStore = useNotificationStore();
                        notifcationStore.pushNotification({
                            message:
                                "Category is associated with non zero expense records. Delete that expenses first.",
                            type: "error",
                            time: 5000,
                        });
                    }
                    reject(errors);
                });
        });
    };

    return {
        current_page,
        total_pages,
        limit,
        q_name,
        expense_categories,
        edit_expense_category_id,
        view_expense_category_id,
        add_expense_category_errors,
        edit_expense_category_errors,
        current_expense_category_item,
        resetCurrentExpenseCatData,
        fetchCatList,
        fetchExpenseCats,
        fetchExpenseCat,
        addExpenseCat,
        editExpenseCat,
        deleteExpenseCat,
    };
}
