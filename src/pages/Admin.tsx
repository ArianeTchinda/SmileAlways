import { useState, type FormEvent } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const apiBase = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

interface TeamMember {
  id?: number;
  name: string;
  role: string;
  speciality: string;
  experience: string;
  email: string;
  phone: string;
  description: string;
  profile_image_url?: string;
  created_at?: string;
}

interface Contact {
  id?: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
  created_at?: string;
}

const AdminPage = () => {
  const [member, setMember] = useState<TeamMember>({
    name: "",
    role: "",
    speciality: "",
    experience: "",
    email: "",
    phone: "",
    description: "",
  });

  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const queryClient = useQueryClient();

  const contactsQuery = useQuery<Contact[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await fetch(`${apiBase}/api/contacts`);
      return response.ok ? response.json() : [];
    },
  });

  const teamQuery = useQuery<TeamMember[]>({
    queryKey: ["team"],
    queryFn: async () => {
      const response = await fetch(`${apiBase}/api/team`);
      return response.ok ? response.json() : [];
    },
  });

  const addTeamMember = useMutation<TeamMember, Error, TeamMember>({
    mutationFn: async (newMember: TeamMember) => {
      const response = await fetch(`${apiBase}/api/team`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newMember, profile_image_url: "" }),
      });
      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.error ?? "Impossible d'ajouter le membre.");
      }
      return response.json();
    },
    onSuccess: () => {
      setAlert({ type: "success", message: "Membre ajouté avec succès." });
      setMember({ name: "", role: "", speciality: "", experience: "", email: "", phone: "", description: "" });
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
    onError: (error: Error) => {
      setAlert({ type: "error", message: error.message || "Erreur lors de l'ajout." });
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlert(null);
    if (!member.name || !member.role || !member.speciality || !member.experience || !member.email || !member.phone) {
      setAlert({ type: "error", message: "Veuillez remplir tous les champs requis." });
      return;
    }
    addTeamMember.mutate(member);
  };

  return (
    <Layout>
      <section className="py-20 bg-dental-cream">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-dental-orange font-semibold">Admin Dashboard</p>
            <h1 className="text-4xl md:text-5xl font-bold text-dental-blue mt-4">Gestion de l’équipe et des contacts</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Ajoutez un membre de l'équipe et consultez les utilisateurs qui ont rempli le formulaire de contact.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-dental-blue">Ajouter un membre de l'équipe</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    Les nouvelles fiches de l’équipe apparaîtront dans l’interface lorsque le backend sera utilisé.
                  </p>
                </div>

                {alert ? (
                  <div className={`rounded-2xl border px-4 py-4 mb-6 ${alert.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`}>
                    {alert.message}
                  </div>
                ) : null}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Nom complet</span>
                      <Input
                        placeholder="Dr. Alice Mbiya"
                        value={member.name}
                        onChange={(event) => setMember({ ...member, name: event.target.value })}
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Rôle</span>
                      <Input
                        placeholder="Hygiéniste Dentaire"
                        value={member.role}
                        onChange={(event) => setMember({ ...member, role: event.target.value })}
                      />
                    </label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Spécialité</span>
                      <Input
                        placeholder="Prévention et soins"
                        value={member.speciality}
                        onChange={(event) => setMember({ ...member, speciality: event.target.value })}
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Expérience</span>
                      <Input
                        placeholder="8 ans"
                        value={member.experience}
                        onChange={(event) => setMember({ ...member, experience: event.target.value })}
                      />
                    </label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Email</span>
                      <Input
                        type="email"
                        placeholder="membre@smilealways.cm"
                        value={member.email}
                        onChange={(event) => setMember({ ...member, email: event.target.value })}
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Téléphone</span>
                      <Input
                        placeholder="6 77 22 33 14"
                        value={member.phone}
                        onChange={(event) => setMember({ ...member, phone: event.target.value })}
                      />
                    </label>
                  </div>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">Description</span>
                    <Textarea
                      placeholder="Courte description du rôle et de l'expertise"
                      value={member.description}
                      onChange={(event) => setMember({ ...member, description: event.target.value })}
                      className="min-h-[140px]"
                    />
                  </label>
                  <Button type="submit" variant="dental" className="w-full py-5" disabled={addTeamMember.isPending}>
                    {addTeamMember.isPending ? "Ajout en cours..." : "Ajouter le membre"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-dental-blue mb-4">Derniers utilisateurs</h2>
                  {contactsQuery.isLoading ? (
                    <p className="text-sm text-muted-foreground">Chargement des contacts...</p>
                  ) : contactsQuery.data?.length ? (
                    <div className="space-y-4">
                      {contactsQuery.data?.map((contact: Contact) => (
                        <div key={contact.id} className="rounded-3xl border border-border p-4 bg-white/80">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="font-semibold text-dental-blue">{contact.name}</p>
                              <p className="text-sm text-muted-foreground">{contact.email} · {contact.phone}</p>
                            </div>
                            <Badge className="bg-dental-blue/10 text-dental-blue">{new Date(contact.created_at).toLocaleDateString()}</Badge>
                          </div>
                          <p className="mt-3 text-sm text-foreground"><strong>Objet :</strong> {contact.subject}</p>
                          {contact.message ? <p className="mt-2 text-sm text-muted-foreground">{contact.message}</p> : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Aucun utilisateur enregistré pour le moment.</p>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-2xl font-semibold text-dental-blue">Membres enregistrés</h2>
                      <p className="text-sm text-muted-foreground mt-1">Consultation du tableau de bord équipe.</p>
                    </div>
                    <Badge className="bg-dental-blue/10 text-dental-blue">{teamQuery.data?.length ?? 0}</Badge>
                  </div>
                  {teamQuery.isLoading ? (
                    <p className="text-sm text-muted-foreground">Chargement des membres...</p>
                  ) : teamQuery.data?.length ? (
                    <div className="space-y-4">
                      {teamQuery.data?.map((member: TeamMember) => (
                        <div key={member.id} className="rounded-3xl border border-border p-4 bg-white/80">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <p className="font-semibold text-dental-blue">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                            <Badge className="bg-dental-orange/10 text-dental-orange">{member.speciality}</Badge>
                          </div>
                          <p className="mt-3 text-sm text-muted-foreground">{member.experience} · {member.email}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Aucun membre ajouté pour le moment.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPage;
